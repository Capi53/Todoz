class Card < ApplicationRecord
    belongs_to :list, optional: true
end
