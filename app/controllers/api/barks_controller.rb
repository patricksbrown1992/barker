class Api::BarksController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @barks = @user.barks.order("created_at DESC")
        render json: @barks, status: 200
    end

    def get10
        @barks = Bark.order("created_at DESC").limit(10)
        if @barks
            render json: @barks, status: 200
        else
            render json: ["There are no barks"], status: 422
        end
    end
    
    def create
        @bark = Bark.new(bark_params)
        if @bark.save
            render json: @bark, status: 200
        else
            render json: @bark.errors.full_messages, status: 422
        end
    end

    def destroy
        @bark = Bark.find(params[:id])
        if @bark.destroy
            render json: @bark, status: 200
        else
            render json: @bark.errors.full_messages, status: 422
        end
    end

    def show
        @bark = Bark.find(params[:id])
        if @bark
            render json: @bark, status: 200
        else
            render json: @bark.errors.full_messages, status: 404
        end
    end

    private

    def bark_params
        params.require(:bark).permit(:user_id, :ruff)
    end

end