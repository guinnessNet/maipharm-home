import * as ExcelJS from 'exceljs';

type CellValue = string | number | Date | boolean | null | undefined;
export interface EachRow{
  [key: string]: CellValue;
}



// let lastUpdated: number | null = null; // 마지막 업데이트 시간

// const CACHE_DURATION = 5 * 60 * 1000; // 5분

async function readXlsx(filBuffer: ArrayBuffer): Promise<{data:EachRow[],headers:string[]}> {
  // const now = Date.now();

  // 캐시가 유효하면 캐시된 데이터를 반환
  // 엑셀 파일 읽기
  console.log('엑셀 파일 읽는 중...');
  const workbook = new ExcelJS.Workbook();
  // await workbook.xlsx.readFile(filePath);
  await workbook.xlsx.load(filBuffer);
  const worksheet = workbook.getWorksheet(1);
  // let headers :string[] = [];

  // 데이터를 배열로 변환
  const data: EachRow[] = [];
  let headers: string[] = []; // 헤더를 저장할 배열
  worksheet?.eachRow((row, rowNumber) => {
    if (rowNumber === 1){
      // console.log('헤더:', row.values);
      headers = row.values as string[]; // 첫 번째 행을 헤더로 사용
      return;
    } // 헤더는 건너뜀
    const rowData:EachRow = {};
    row.eachCell((cell, colNumber) => {
      rowData[`${headers[colNumber]}`] = cell.value as CellValue; // 헤더를 키로 사용
    });
    data.push(rowData);
  });

  // 캐시에 저장
  // cachedData = data;
  // lastUpdated = now;

  return {data, headers: headers.slice(1)}; // 헤더도 반환
}

// // 사용 예시
// (async () => {
//   const data = await readXlsx('/Users/maicto/Desktop/portablePOS/src/lib/1.xlsx');
//   console.log(data);
// })();

export default readXlsx;
// export { cachedData, headers }; // 캐시된 데이터와 헤더를 export