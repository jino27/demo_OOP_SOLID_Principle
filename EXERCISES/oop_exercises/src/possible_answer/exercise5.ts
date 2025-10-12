class Report {
  generate(): string {
    return "Report data";
  }
}

class ReportSaver {
  save(data: string) {
    console.log("Saving:", data);
  }
}

const report = new Report();
const saver = new ReportSaver();

const data = report.generate();
saver.save(data);
