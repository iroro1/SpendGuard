// utils/downloadReport.ts
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const downloadReport = async (date: string) => {
  // Find the element to capture (e.g., the entire dashboard or a specific section)
  const element = document.getElementById("dashboard");

  if (!element) return;

  // Use html2canvas to capture the element as a canvas
  const canvas = await html2canvas(element);

  // Convert the canvas to an image
  const imgData = canvas.toDataURL("image/png");

  // Create a new jsPDF instance
  const pdf = new jsPDF("p", "mm", "a4");

  // Calculate image dimensions for the PDF (keeping aspect ratio)
  const imgWidth = 210;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  // Add the image to the PDF
  pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

  // Save the PDF
  pdf.save(date + "-report.pdf");
};
