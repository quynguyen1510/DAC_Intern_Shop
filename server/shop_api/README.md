1. Require:
  - Ruby version:  2.5.3p105
  - Rails version: 5.2.2
2. Create a new project using postgresql as database
 - Run 'rails new PROJECT_NAME --api --database postgresql' in terminal
 - Run 'cd PROJECT_NAME'

3. Project's config

- In gemfile,
  [...]
  + gem 'pg', '>= 0.18', '< 2.0' ( for postgresql)
  + gem 'bcrypt ( ActiveModel has_secure_password )
  [...]

- In /config/database.yml:
  + default: &default
  + adapter: postgresql
  + encoding: unicode
  + pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  + username: log_user
  + password: 123456
  + host: localhost

- Run 'Bundle install' to install all of gems in gemfile
- Run 'rails/rake db:create' to create a new database in postgresql
- Run 'rails server/s' to run a local server
