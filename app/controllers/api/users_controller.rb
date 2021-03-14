class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            UserMailer.sign_up_email(@user.email, @user.username).deliver_now
            render "api/users/show"
        else    
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        if @user
            render json: @user, status: 200
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :username)
    end

end