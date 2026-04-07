import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import ESLintPlugin from "eslint-webpack-plugin";

// In Node.js versions prior to native support for import.meta.dirname,
// derive __dirname from import.meta.url.
// (Node 20.11+ supports import.meta.dirname and import.meta.filename.)
const __filename = fileURLToPath(import.meta.url);
console.log('Ioannis',__filename);
const __dirname = path.dirname(__filename);


export default {
    entry: "./src/index.ts",
    mode: "development",
    output: {
        filename: 'bundle.js',

        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/inline',
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        configFile: "tsconfig.json",
                        transpileOnly: false,
                    },
                },
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/, use: [
                    { loader: "style-loader" }, 
                    { loader: "css-modules-typescript-loader" }, 
                    { loader: "css-loader", options: { modules: true } }, 
                    { loader: "sass-loader" },  
                  
                ]
            }
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html',
        scriptLoading: 'defer'
    }),    new ESLintPlugin({
 
        files: 'src/**/*.{js,jsx,ts,tsx}'
    }),
    ],

    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        hot: true,
    },

};