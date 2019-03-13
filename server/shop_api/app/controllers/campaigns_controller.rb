class CampaignsController < ApplicationController
    before_action :get_campaign, only: [:show, :destroy, :update]
    before_action :only_shop, only: [:update, :destroy]
    before_action :only_admin_and_shop, only: [:index]

    # GET '/categories'
  def index 
    @campaigns = Campaign.all
    json_response(@campaigns) 
  end

    # POST '/campaigns'
  def create
    data = campaign_params
    data[:status] = true 
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



  private

  def campaign_params
    params.permit(:startdate, :enddate, :budget, :bid, :campaignimg, :status, :user_id)
  end

  def get_campaign
    @campaign = Campaign.find(params[:id])
  end

  def only_shop
    json_response({ message: "Don't have permission"}, :forbidden) unless is_shop?(@current_user)
  end

  def only_admin_and_shop
    json_response({ message: "Don't have permission"}, :forbidden) unless is_admin?(@current_user) || is_shop?(@current_user)
  end
end
