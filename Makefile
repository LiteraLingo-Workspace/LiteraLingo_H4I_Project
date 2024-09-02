# BUILD AND START ALL DOCKER CONTAINERS
up_build:
	@echo "Stopping running Docker images..."
	docker-compose down
	@echo "Building and starting Docker images..."
	docker-compose up --build -d
	@echo "Docker images built and started!"

# START ALL DOCKER CONTAINERS WITHOUT BUILDING
up:
	@echo "Starting Docker images..."
	docker-compose up -d
	@echo "Docker images started!"

# STOP ALL DOCKER CONTAINERS
down:
	@echo "Stopping Docker images..."
	docker-compose down
	@echo "Docker images stopped!"
	