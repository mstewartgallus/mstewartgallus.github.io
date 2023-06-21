.PHONY: all TenApp IndexApp

all: TenApp IndexApp

TenApp:
	dotnet publish -o public/ TenApp

IndexApp:
	cd IndexApp && yarn build
	mkdir -p public/wwwroot/
	rsync -r IndexApp/public/ public/wwwroot/
