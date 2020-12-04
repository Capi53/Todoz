FROM ruby:2.7.1

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client vim
RUN mkdir /Todoz

WORKDIR /Todoz
COPY Gemfile /Todoz/Gemfile
COPY Gemfile.lock /Todoz/Gemfile.lock
RUN bundle install
COPY . /Todoz

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3001

# Start the main process.
#CMD ["rails", "server", "-b", "0.0.0.0"]
