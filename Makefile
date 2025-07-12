.PHONY: all IndexApp ten-app

all: IndexApp ten-app

IndexApp:
	cd IndexApp && yarn build
	mkdir -p public/wwwroot/
	rsync -r IndexApp/public/ public/wwwroot/

ten-app:
	cd ten-app && yarn build
	mkdir -p public/wwwroot/
	rsync -r ten-app/out/ public/wwwroot/ten
