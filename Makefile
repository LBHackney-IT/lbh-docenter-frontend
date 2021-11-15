.PHONY: local
local:
	eval "$(cat .env | tr '\n' ' ') yarn dev -p 4000"