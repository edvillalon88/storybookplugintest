export interface Serie {
    label: string;
    data: any[];
    borderColor: string;
    backgroundColor: string;
}
export interface DataInterface {
    data:any[],
    title: string
}
export interface LineChartInterface {
    labels:string[];
    datasets: any[]
}