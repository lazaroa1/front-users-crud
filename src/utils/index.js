import moment from "moment";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

export const getAge = (date) => {
  return moment().diff(date, "years");
};

export const formatCpf = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
};

export const formatTelephoneNumber = (str) => {
  if (str?.length === 10) {
    return str.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  }
  return str?.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
};

export async function exportToExcel(excelData, fileName) {
  const fileType =
    "application/vnd.openxmlformats-officedoment.spreadsheetml.sheet;charset=UTF-8";
  const ws = XLSX.utils.json_to_sheet(excelData);
  const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  FileSaver.saveAs(data, fileName + ".xlsx");
}
