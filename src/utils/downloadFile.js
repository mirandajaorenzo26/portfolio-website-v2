export default function downloadFile() {
  const fileName = 'mirandajaorenzo-cv.pdf';
  const fileUrl = '/mirandajaorenzo-cv.pdf';
  if (
    window.confirm(`Are you sure you want to download the file ${fileName}?`)
  ) {
    fetch(fileUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  }
}
