// vue-cli 3 的项目配置

// 参考文档：https://cli.vuejs.org/zh/config/

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')


/* 
 * publicPath
 * webpack的output.publicPath
 * 如果部署路径不是服务器根目录，则配置成相应子目录路径
 * 如//xxx.eyougame.com/activity/ ，打包时会补充上这段路径
 */
let publicPath = "/"
if (process.env.NODE_ENV === "production") {
    //TODO
    // 有需要自行修改
    publicPath = "./"
}


// 配置 export
module.exports = {

    publicPath,

    /* 
     * outputDir
     * 打包输出路径
     */

    outputDir: 'docs',

    /*
     * assetsDir
     * 放置生成的静态资源 (js、css、img等)的(相对于outputDir)目录。
     */

    productionSourceMap: false,

    // 禁用默认资源md5指纹码
    filenameHashing: false,


    chainWebpack: config => {

        // 路径别名
        config.resolve.alias
            .set('~', '@/assets')
            .set('components', '@/components')
            .set('view', '@/view')
            .end()

        // 图片指纹码
        config.module
            .rule("images")
            .use('url-loader')
            .loader('url-loader')
            .tap((options = {}) => Object.assign(options, {
                fallback: {
                    loader: 'file-loader',
                    options: {
                        name: 'static/img/[name].[ext]?[hash:8]'
                    }
                }
            })).end()

        // media指纹码
        config.module
            .rule("media")
            .test(/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .tap((options = {}) => Object.assign(options, {
                fallback: {
                    loader: 'file-loader',
                    options: {
                        name: 'static/media/[name].[ext]?[hash:8]'
                    }
                }
            })).end()

        // font指纹码
        config.module
            .rule("font")
            .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/)
            .use('url-loader')
            .loader('url-loader')
            .tap((options = {}) => Object.assign(options, {
                fallback: {
                    loader: 'file-loader',
                    options: {
                        name: 'static/fonts/[name].[ext]?[hash:8]'
                    }
                }
            })).end()

        // js指纹码

        config.output
            .filename('static/js/[name].js?[hash:8]')
            .chunkFilename('static/js/[name].js?[hash:8]')
            .end()


        // 压缩css
        config.optimization
            .minimizer[
            new OptimizeCssAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
                canPrint: true
            })
        ]

    },

    css: {
        // css指纹码
        extract: {
            filename: "static/css/[name].css?[hash:8]",
            chunkFilename: "static/css/[id].css?[hash:8]"
        }
    },

    assetsDir: 'static',

    pages:{
        index: {
            entry: 'src/app/index.js',    
            template: 'public/index.html',
            filename: 'index.html'
        }
    },

    parallel: require('os').cpus().length > 1,

    devServer: {
        host: '0.0.0.0'
    }
}