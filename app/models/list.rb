class List < ApplicationRecord
    belongs_to :board , optional: true
    has_many :card
end
