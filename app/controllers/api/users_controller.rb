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

    private

    def user_params
        params.require(:user).permit(:email, :password, :username)
    end

end