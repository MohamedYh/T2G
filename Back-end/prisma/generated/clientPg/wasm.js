
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.18.0
 * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
 */
Prisma.prismaVersion = {
  client: "5.18.0",
  engine: "4c784e32044a8a016d99474bd02a3b6123742169"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  isConfirmed: 'isConfirmed',
  v_code: 'v_code',
  token: 'token'
};

exports.Prisma.ProjectsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  createdDate: 'createdDate',
  name: 'name',
  title: 'title',
  background_color: 'background_color',
  data_selected: 'data_selected',
  graph_selected: 'graph_selected'
};

exports.Prisma.DataScalarFieldEnum = {
  id: 'id',
  data: 'data',
  headers: 'headers',
  name: 'name',
  projectId: 'projectId'
};

exports.Prisma.Background_ImageScalarFieldEnum = {
  id: 'id',
  image_name: 'image_name',
  Date: 'Date',
  is_set: 'is_set',
  projectId: 'projectId'
};

exports.Prisma.ColumnScalarFieldEnum = {
  id: 'id',
  bar_spacing: 'bar_spacing',
  border_radius: 'border_radius',
  border_bld: 'border_bld',
  border_color: 'border_color',
  isLegend: 'isLegend',
  legend_size: 'legend_size',
  is_legend_italic: 'is_legend_italic',
  is_legend_bold: 'is_legend_bold',
  legend_color: 'legend_color',
  isAxis: 'isAxis',
  axis_txt_size: 'axis_txt_size',
  is_axis_txt_italic: 'is_axis_txt_italic',
  is_axis_txt_bold: 'is_axis_txt_bold',
  axis_txt_color: 'axis_txt_color',
  axisX: 'axisX',
  axisY: 'axisY',
  projectId: 'projectId'
};

exports.Prisma.BarsScalarFieldEnum = {
  id: 'id',
  bar_spacing: 'bar_spacing',
  border_radius: 'border_radius',
  border_bld: 'border_bld',
  border_color: 'border_color',
  isLegend: 'isLegend',
  legend_size: 'legend_size',
  is_legend_italic: 'is_legend_italic',
  is_legend_bold: 'is_legend_bold',
  legend_color: 'legend_color',
  isAxis: 'isAxis',
  axis_txt_size: 'axis_txt_size',
  is_axis_txt_italic: 'is_axis_txt_italic',
  is_axis_txt_bold: 'is_axis_txt_bold',
  axis_txt_color: 'axis_txt_color',
  axisX: 'axisX',
  axisY: 'axisY',
  projectId: 'projectId'
};

exports.Prisma.PieScalarFieldEnum = {
  id: 'id',
  start_angle: 'start_angle',
  show_percentage: 'show_percentage',
  isLegend: 'isLegend',
  legend_size: 'legend_size',
  is_legend_italic: 'is_legend_italic',
  is_legend_bold: 'is_legend_bold',
  legend_color: 'legend_color',
  projectId: 'projectId'
};

exports.Prisma.DonutScalarFieldEnum = {
  id: 'id',
  start_angle: 'start_angle',
  show_percentage: 'show_percentage',
  inner_radius: 'inner_radius',
  isLegend: 'isLegend',
  legend_size: 'legend_size',
  is_legend_italic: 'is_legend_italic',
  is_legend_bold: 'is_legend_bold',
  legend_color: 'legend_color',
  projectId: 'projectId'
};

exports.Prisma.AreaScalarFieldEnum = {
  id: 'id',
  show_pointer_mark: 'show_pointer_mark',
  isAxis: 'isAxis',
  axis_txt_size: 'axis_txt_size',
  is_axis_txt_italic: 'is_axis_txt_italic',
  is_axis_txt_bold: 'is_axis_txt_bold',
  axis_txt_color: 'axis_txt_color',
  axisX: 'axisX',
  axisY: 'axisY',
  isLegend: 'isLegend',
  legend_size: 'legend_size',
  is_legend_italic: 'is_legend_italic',
  is_legend_bold: 'is_legend_bold',
  legend_color: 'legend_color',
  thickness: 'thickness',
  is_line_smoth: 'is_line_smoth',
  projectId: 'projectId'
};

exports.Prisma.LineScalarFieldEnum = {
  id: 'id',
  show_pointer_mark: 'show_pointer_mark',
  isAxis: 'isAxis',
  axis_txt_size: 'axis_txt_size',
  is_axis_txt_italic: 'is_axis_txt_italic',
  is_axis_txt_bold: 'is_axis_txt_bold',
  axis_txt_color: 'axis_txt_color',
  axisX: 'axisX',
  axisY: 'axisY',
  isLegend: 'isLegend',
  legend_size: 'legend_size',
  is_legend_italic: 'is_legend_italic',
  is_legend_bold: 'is_legend_bold',
  legend_color: 'legend_color',
  thickness: 'thickness',
  is_line_smoth: 'is_line_smoth',
  projectId: 'projectId'
};

exports.Prisma.Column_LineScalarFieldEnum = {
  id: 'id',
  b_bar_spacing: 'b_bar_spacing',
  b_border_radius: 'b_border_radius',
  b_border_bld: 'b_border_bld',
  b_border_color: 'b_border_color',
  l_show_pointer_mark: 'l_show_pointer_mark',
  isAxis: 'isAxis',
  axis_txt_size: 'axis_txt_size',
  is_axis_txt_italic: 'is_axis_txt_italic',
  is_axis_txt_bold: 'is_axis_txt_bold',
  axis_txt_color: 'axis_txt_color',
  axisX: 'axisX',
  axisY: 'axisY',
  isLegend: 'isLegend',
  legend_size: 'legend_size',
  is_legend_italic: 'is_legend_italic',
  is_legend_bold: 'is_legend_bold',
  legend_color: 'legend_color',
  l_thickness: 'l_thickness',
  l_is_line_smoth: 'l_is_line_smoth',
  projectId: 'projectId'
};

exports.Prisma.Column_AreaScalarFieldEnum = {
  id: 'id',
  b_bar_spacing: 'b_bar_spacing',
  b_border_radius: 'b_border_radius',
  b_border_bld: 'b_border_bld',
  b_border_color: 'b_border_color',
  a_show_pointer_mark: 'a_show_pointer_mark',
  isAxis: 'isAxis',
  axis_txt_size: 'axis_txt_size',
  is_axis_txt_italic: 'is_axis_txt_italic',
  is_axis_txt_bold: 'is_axis_txt_bold',
  axis_txt_color: 'axis_txt_color',
  axisX: 'axisX',
  axisY: 'axisY',
  isLegend: 'isLegend',
  legend_size: 'legend_size',
  is_legend_italic: 'is_legend_italic',
  is_legend_bold: 'is_legend_bold',
  legend_color: 'legend_color',
  a_thickness: 'a_thickness',
  a_is_line_smoth: 'a_is_line_smoth',
  projectId: 'projectId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Projects: 'Projects',
  Data: 'Data',
  Background_Image: 'Background_Image',
  Column: 'Column',
  Bars: 'Bars',
  Pie: 'Pie',
  Donut: 'Donut',
  Area: 'Area',
  Line: 'Line',
  Column_Line: 'Column_Line',
  Column_Area: 'Column_Area'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
