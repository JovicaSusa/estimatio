# frozen_string_literal: true

RSpec.describe "Root", type: :request do
  it "is successful" do
    get "/"

    expect(last_response.status).to be(200)
  end
end
