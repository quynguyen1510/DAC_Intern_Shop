class CampaignsController < ApplicationController
    before_action :get_campaign, only: [:show, :destroy, :update]
    before_action :only_shop_and_admin, only: [:index, :create, :update]
    before_action :only_admin, only: [:destroy]
    before_action :get_shoper, only: [:campaign_by_shoper]

    # GET '/categories'
  def index 
    @campaigns = Campaign.all.order("id DESC").paginate(page: params[:page], per_page: Constants.record_per_page)
    json_response({
      campaigns: @campaigns,
      total: Campaign.count
    }) 
  end

    # POST '/campaigns'
  def create
    data = campaign_params
    @campaign = Campaign.create!(data)
    response = {
      product: @campaign,
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
    json_response(@user.campaigns)
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
