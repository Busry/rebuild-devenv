import webpack from "webpack";
import config from "../webpack.config.dev";
import webpackDevMiddleware from "webpack-dev-middleware";

const compiler = webpack(config);
const options = {
  noInfo: true,
  publicPath: config.output.publicPath,
};

export default webpackDevMiddleware(compiler, options);
