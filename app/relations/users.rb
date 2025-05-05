# frozen_string_literal: true

module Estimation
  module Relations
    class Users < Estimation::DB::Relation
      schema :users, infer: true
    end
  end
end
