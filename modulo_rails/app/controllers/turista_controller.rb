class TuristaController < ApplicationController
  before_action :set_turistum, only: [:show, :update, :destroy]

  # GET /turista
  def index
    @turista = Turista.all

    render json: @turista
  end

  # GET /turista/1
  def show
    render json: @turista
  end

  # POST /turista
  def create
    @turista = Turista.new(turistum_params)

    if @turista.save
      render json: @turista, status: :created, location: @turista
    else
      render json: @turista.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /turista/1
  def update
    if @turista.update(turistum_params)
      render json: @turista
    else
      render json: @turista.errors, status: :unprocessable_entity
    end
  end

  # DELETE /turista/1
  def destroy
    @turista.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_turistum
      @turista = Turista.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def turistum_params
      params.require(:turistum).permit(:mes, :cantidad)
    end
end
