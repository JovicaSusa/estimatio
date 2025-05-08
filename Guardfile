# frozen_string_literal: true

require 'guard/compat/plugin'

module ::Guard
  class Postcss < Plugin

    def initialize(options = {})
      super(options)
    end

    def run_on_modifications(paths)
      `bundle exec hanami assets compile`
    end
  end
end

group :server do
  guard "puma", port: ENV.fetch("HANAMI_PORT", 2300) do
    # Edit the following regular expression for your needs.
    # See: https://guides.hanamirb.org/app/code-reloading/
    watch(%r{^(app|config|lib|slices)([\/][^\/]+)*.(rb|erb|haml|slim)$}i)
  end

  guard "postcss" do
    watch(%r{^(app|slices)/.+\.(rb|erb)$}i)
  end
end
