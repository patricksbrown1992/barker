class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ["Incorrect password"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user
            render json: ["You have logged out of PatrickFlix"], status: 200
        else
            render json: ["No one is signed in"], status: 422
        end
    end

end