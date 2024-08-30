export interface ProjectData {
    id: number;
    createdDate: string;
    name: string;
    title: string;
    background_color: string;
    data: Data[];
    background_images: Image[];
    data_selected: number;
    graph_selected: number;
    Column: ColumnInterface;
    Bars: BarsInterface;
    Pie: PieInterface;
    Donut: DonutInterface;
    Area: AreaInterface;
    Line: LineInterface;
    Column_Area: Column_AreaInterface;
    Column_Line: Column_LineInterface;
}

export interface Image {
    id: number;
    image_name: string;
    Date: string;
    is_set: boolean;
    projectId: number;
}

export interface Data {
    id: number;
    name: string;
    data: string;
    headers: string;
    projectId: number;
}

export interface DataObject {
    [key: string]: { [key: string]: string };
}

export interface ColumnInterface {
    id: number;
    bar_spacing: number;
    border_radius: number;
    border_bld: number;
    border_color: string;
    isLegend: boolean;
    legend_size: number;
    is_legend_italic: boolean;
    is_legend_bold: boolean;
    legend_color: string;
    isAxis: boolean;
    axis_txt_size: number;
    is_axis_txt_italic: boolean;
    is_axis_txt_bold: boolean;
    axis_txt_color: string;
    axisX: string;
    axisY: string;
    projectId: number;
}

export interface BarsInterface {
    id: number;
    bar_spacing: number;
    border_radius: number;
    border_bld: number;
    border_color: string;
    isLegend: boolean;
    legend_size: number;
    is_legend_italic: boolean;
    is_legend_bold: boolean;
    legend_color: string;
    isAxis: boolean;
    axis_txt_size: number;
    is_axis_txt_italic: boolean;
    is_axis_txt_bold: boolean;
    axis_txt_color: string;
    axisX: string;
    axisY: string;
    projectId: number;
}

export interface PieInterface {
    id: number;
    start_angle: number;
    isLegend: boolean;
    legend_size: number;
    is_legend_italic: boolean;
    is_legend_bold: boolean;
    legend_color: string;
    projectId: number;
}

export interface DonutInterface {
    id: number;
    start_angle: number;
    inner_radius: number;
    isLegend: boolean;
    legend_size: number;
    is_legend_italic: boolean;
    is_legend_bold: boolean;
    legend_color: string;
    projectId: number;
}

export interface AreaInterface {
    id: number;
    show_pointer_mark: boolean;
    isAxis: boolean;
    axis_txt_size: number;
    is_axis_txt_italic: boolean;
    is_axis_txt_bold: boolean;
    axis_txt_color: string;
    axisX: string;
    axisY: string;
    isLegend: boolean;
    legend_size: number;
    is_legend_italic: boolean;
    is_legend_bold: boolean;
    legend_color: string;
    thickness: number;
    is_line_smoth: boolean;
    projectId: number;
}

export interface LineInterface {
    id: number;
    show_pointer_mark: boolean;
    isAxis: boolean;
    axis_txt_size: number;
    is_axis_txt_italic: boolean;
    is_axis_txt_bold: boolean;
    axis_txt_color: string;
    axisX: string;
    axisY: string;
    isLegend: boolean;
    legend_size: number;
    is_legend_italic: boolean;
    is_legend_bold: boolean;
    legend_color: string;
    thickness: number;
    is_line_smoth: boolean;
    projectId: number;
}

export interface Column_AreaInterface {
    id: number;
    b_bar_spacing: number;
    b_border_radius: number;
    b_border_bld: number;
    b_border_color: string;
    b_isLegend: boolean;
    b_legend_size: number;
    b_is_legend_italic: boolean;
    b_is_legend_bold: boolean;
    b_legend_color: string;
    b_isAxis: boolean;
    b_axis_txt_size: number;
    b_is_axis_txt_italic: boolean;
    b_is_axis_txt_bold: boolean;
    b_axis_txt_color: string;
    b_axisX: string;
    b_axisY: string;
    a_show_pointer_mark: boolean;
    a_isAxis: boolean;
    a_axis_txt_size: number;
    a_is_axis_txt_italic: boolean;
    a_is_axis_txt_bold: boolean;
    a_axis_txt_color: string;
    a_axisX: string;
    a_axisY: string;
    a_isLegend: boolean;
    a_legend_size: number;
    a_is_legend_italic: boolean;
    a_is_legend_bold: boolean;
    a_legend_color: string;
    a_thickness: number;
    a_is_line_smoth: boolean;
    projectId: number;
}

export interface Column_LineInterface {
    id: number;
    b_bar_spacing: number;
    b_border_radius: number;
    b_border_bld: number;
    b_border_color: string;
    b_isLegend: boolean;
    b_legend_size: number;
    b_is_legend_italic: boolean;
    b_is_legend_bold: boolean;
    b_legend_color: string;
    b_isAxis: boolean;
    b_axis_txt_size: number;
    b_is_axis_txt_italic: boolean;
    b_is_axis_txt_bold: boolean;
    b_axis_txt_color: string;
    b_axisX: string;
    b_axisY: string;
    l_show_pointer_mark: boolean;
    l_isAxis: boolean;
    l_axis_txt_size: number;
    l_is_axis_txt_italic: boolean;
    l_is_axis_txt_bold: boolean;
    l_axis_txt_color: string;
    l_axisX: string;
    l_axisY: string;
    l_isLegend: boolean;
    l_legend_size: number;
    l_is_legend_italic: boolean;
    l_is_legend_bold: boolean;
    l_legend_color: string;
    l_thickness: number;
    l_is_line_smoth: boolean;
    projectId: number;
}
