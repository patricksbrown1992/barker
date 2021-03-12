class UserMailer < ApplicationMailer

    def sign_up_email(email, username)
        @email = email
        @username = username
        mail(to: @email, subject: "Hi, welcome to Barker")
    end
end
