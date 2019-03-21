class CampaignsController < ApplicationController
    before_action :get_campaign, only: [:show, :destroy, :update]
    before_action :only_shop_and_admin, only: [:index, :create, :update]
    before_action :only_admin, only: [:destroy]
    before_action :get_shoper, only: [:campaign_by_shoper]
    skip_before_action :authorize_request, only: [:get_banner]

    # GET '/categories'
  def index 
    @campaigns = Campaign.all.order("id DESC").paginate(page: params[:page], per_page: Constants.record_per_page)
    result = Array.new
    @campaigns.each do |campaign|
      tmp = Hash.new
      tmp[:id] = campaign.id
      tmp[:startdate] = campaign.startdate
      tmp[:enddate] = campaign.enddate
      tmp[:budget] = campaign.budget
      tmp[:bid] = campaign.bid
      tmp[:campaignimg] = campaign.campaignimg
      tmp[:status] = campaign.status
      tmp[:name] = campaign.name
      tmp[:title] = campaign.title
      tmp[:description] = campaign.description
      tmp[:final_url] = campaign.final_url
      tmp[:spend] = campaign.spend 
      tmp[:shop_email] = campaign.user.email
      result.push(tmp)
    end
    json_response({
      campaigns: result,
      total: Campaign.count
    }) 
  end

    # POST '/campaigns'
  def create
    data = campaign_params
    @campaign = Campaign.create!(data)
    response = {
      campaign: @campaign,
      message: Message.campaign_created 
    }
    json_response(response, :created)
  end

   # PUT /campaigns/:id 
  def update 
    protected_params = Hash.new
    campaign_params.each do |attr_name, attr_value|
      protected_params[attr_name.to_sym] = attr_value unless attr_value.empty?
    end
    @campaign.update(protected_params)
    response = {
        campaign: @campaign,
        message: Message.campaign_updated
    }
    json_response(response)
  end

    #DELETE /campaigns/:id
  def destroy
    @campaign.update_attribute("status", false)
    json_response({ message: Message.campaign_removed})
  end
  
   #GET /campaigns/shop/:user_id
  def campaign_by_shoper
    @campaigns = @user.campaigns.order("id DESC").paginate(page: params[:page], per_page: Constants.record_per_page)
    result = Array.new
    @campaigns.each do |campaign|
      tmp = Hash.new
      tmp[:id] = campaign.id
      tmp[:startdate] = campaign.startdate
      tmp[:enddate] = campaign.enddate
      tmp[:budget] = campaign.budget
      tmp[:bid] = campaign.bid
      tmp[:campaignimg] = campaign.campaignimg
      tmp[:status] = campaign.status
      tmp[:name] = campaign.name
      tmp[:title] = campaign.title
      tmp[:description] = campaign.description
      tmp[:final_url] = campaign.final_url
      tmp[:spend] = campaign.spend 
      tmp[:shop_email] = campaign.user.email
      result.push(tmp)
    end
    json_response({
      campaigns: result,
      total: Campaign.count
    }) 
  end


  # GET banner
  def get_banner
    today = DateTime.now.strftime("%Y-%m-%d")
    @campaigns = Campaign.all
    tmpArr = Array.new
    # get valid campaigns
    @campaigns.each do |record|
      if (record.startdate.strftime <= today &&
          today <= record.enddate.strftime && 
          record.status && record.budget >= record.bid)
        tmpArr.push(record)
      end                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    end

    # sort valid campaigns by bid
    sort_by_budget = tmpArr.sort do |x, y|
      x[:bid] <=> y[:bid]
    end
    sort_by_budget = sort_by_budget.reverse!
    # get 
    banners = Array.new
    sort_by_budget.first(3).each do |element|
       # account money and save in db
       new_budget = element.budget - element.bid 
       # account spend
       if(element.spend.nil?)
         new_spend = element.bid
       else
         new_spend = element.spend + element.bid
       end
       if(new_budget >= element.bid)
         Campaign.find_by(id: element.id).update(budget: new_budget, spend: new_spend) 
       else
         Campaign.find_by(id: element.id).update(status: false)
       end
       banner = Hash.new 
       banner[:title] = element.title
       banner[:campaignimg] = element.campaignimg
       banner[:final_url] = element.final_url
       banners.push(banner)
    end
    json_response({
      banners: banners,
    })
  end

  private

  def campaign_params
    params.permit(:startdate, :enddate, :budget, :bid, :campaignimg, :status, :user_id, :name, :title, :description, :final_url)
  end

  def get_shoper
    @user = User.find(params[:user_id])
  end

  def get_campaign
    @campaign = Campaign.find(params[:id])
  end

  def only_shop_and_admin
    json_response({ message: "Don't have permission"}, :forbidden) unless is_shop?(@current_user) || is_admin?(@current_user)
  end

  def only_admin
    json_response({ message: "Don't have permission"}, :forbidden) unless is_admin?(@current_user)
  end
end
