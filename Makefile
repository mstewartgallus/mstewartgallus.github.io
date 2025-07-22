.PHONY: all IndexApp ten-app

all: IndexApp

IndexApp:
	cd IndexApp && yarn build
	mkdir -p public/wwwroot/
	rsync -r --delete IndexApp/public/ public/wwwroot/
