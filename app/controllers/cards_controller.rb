class CardsController < ApplicationController
  before_action :set_card, only: [:show, :edit, :update, :destroy]

  # GET /cards
  # GET /cards.json
  def index
    @cards = Card.all
  end

  # GET /cards/1
  # GET /cards/1.json
  def show
  end

  # GET /cards/new
  def new
    session[:return_to] ||= request.referer
    @card = Card.new
    @user = current_user
    # @list = List.find()
    @card.created_by = @user.id
    @param_id = params[:id]
  end

  # GET /cards/1/edit
  def edit
  end

  # POST /cards
  # POST /cards.json
  def create
    @card = Card.new(name: params[:card][:name], created_by: current_user.id, list_id:Integer(params[:card][:list_id]))
    # respond_to do |format|
    if @card.save
      redirect_to session.delete(:return_to)
    end
    # respond_to do |format|
    #   if @card.save
    #     format.html { redirect_to @card, notice: 'Card was successfully created.' }
    #     format.json { render :show, status: :created, location: @card }
    #   else
    #     format.html { render :new }
    #     format.json { render json: @card.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  # PATCH/PUT /cards/1
  # PATCH/PUT /cards/1.json
  def update
    respond_to do |format|
      if @card.update(card_params)
        format.html { redirect_to @card, notice: 'Card was successfully updated.' }
        format.json { render :show, status: :ok, location: @card }
      else
        format.html { render :edit }
        format.json { render json: @card.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /cards/1
  # DELETE /cards/1.json
  def destroy
    @card.destroy
    respond_to do |format|
      format.html { redirect_to cards_url, notice: 'Card was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_card
      @card = Card.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def card_params
      params.fetch(:card, {})
    end

    def card_params
      params.require(:card).permit(:name, :list_id)
    end
end
