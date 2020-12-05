class UsersController < ApplicationController
  layout "boards_header"
  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
    render 'new'
  end

  private
  def user_params
    params.require(:user).permit(:id, :name, :email)
  end
end
