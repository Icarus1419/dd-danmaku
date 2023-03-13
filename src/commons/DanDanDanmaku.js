import './constants';
import translate from '../../locales';

class DanDanDanmaku {
    constructor() {
        // 0:当前状态关闭 1:当前状态打开
        this.config = { chConvert: 1, danmakuSwitch: 1 };
        if (window.localStorage.getItem(configName)) {
            this.config = JSON.parse(window.localStorage.getItem(configName));
        }
        this.locales = translate(window);
        this.client = getClient();
        this.danmaku = null;
        this.episode_info = null;
        this.ob = null;
        this.loading = false;
        this.timers = {};
    }
    getConfig(k) {
        return this.config[k];
    }
    setConfig(k, v) {
        this.config[k] = v;
        window.localStorage.setItem(configName, JSON.stringify(this.config));
    }
    init() {
        if (!window.ddd) {
            // 理论永远不应进入该case
            throw this.locales.exception.not_init;
        }
    }
}
