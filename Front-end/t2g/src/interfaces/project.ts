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
    show_percentage: boolean;
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
    show_percentage: boolean;
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

export interface Column_LineInterface {
    id: number;
    b_bar_spacing: number;
    // Border
    b_border_radius: number;
    b_border_bld: number;
    b_border_color: string;
    // Pointer
    l_show_pointer_mark: boolean;
    // Axis
    isAxis: boolean;
    axis_txt_size: number;
    is_axis_txt_italic: boolean;
    is_axis_txt_bold: boolean;
    axis_txt_color: string;
    axisX: string;
    axisY: string;
    // Legend
    isLegend: boolean;
    legend_size: number;
    is_legend_italic: boolean;
    is_legend_bold: boolean;
    legend_color: string;
    // Line
    l_thickness: number;
    l_is_line_smoth: boolean;
    // Relation
    projectId: number;
}

export interface Column_AreaInterface {
    id: number;
    b_bar_spacing: number;
    // Border
    b_border_radius: number;
    b_border_bld: number;
    b_border_color: string;
    // Pointer
    a_show_pointer_mark: boolean;
    // Axis
    isAxis: boolean;
    axis_txt_size: number;
    is_axis_txt_italic: boolean;
    is_axis_txt_bold: boolean;
    axis_txt_color: string;
    axisX: string;
    axisY: string;
    // Legend
    isLegend: boolean;
    legend_size: number;
    is_legend_italic: boolean;
    is_legend_bold: boolean;
    legend_color: string;
    // Line
    a_thickness: number;
    a_is_line_smoth: boolean;
    // Relation
    projectId: number;
}
