class openlink {
    constructor(runtime) {
       /**
       * @type {Runtime}
       */
        this.runtime = runtime;
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo() {
        return {
            id: 'openlink',
            name: 'OpenLink',
            blocks: [
                {
                    opcode: 'openUrl',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '开启 [URL]',
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'http://www.baidu.com/'
                        }
                    }
                },
                {
                    opcode: 'redirectUrl',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '跳转 [URL]',
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'http://www.baidu.com/'
                        }
                    }
                },
            ],
            menus: {
            }
        };
    }

    openUrl(args, util) {
            window.open(args.URL);
    }

    redirectUrl(args, util) {
            window.location = args.URL;
    }
}

Scratch.extensions.register(new openlink());
