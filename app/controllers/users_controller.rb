class UsersController < ApplicationController
  layout "boards_header"
  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
    @usericon = "/assets/images/Todoz.png"
    render 'new'
  end

  private
  def user_params
    params.require(:user).permit(:id, :name, :email, :name)
  end
end
