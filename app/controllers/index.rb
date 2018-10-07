get '/' do
  erb :index
end


post '/rolls' do
  if request.xhr?
  	@die = Die.new(params[:sides].to_i)
  	erb :die_container, layout: false, locals: { die: @die }
  else
  	erb :index
  end
end
