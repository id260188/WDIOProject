import {config as baseConfig} from "../wdio.conf"
export const config = Object.assign(baseConfig,{
    environment: "sit",
    sitURL: "https://www.saucedemo.com"
})