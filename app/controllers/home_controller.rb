class HomeController < ApplicationController
  def index    

    data = {
      helloReact: "Hello React from app/javascript/components/home/Index.jsx"
    }

    to_react(data)

  end
end
