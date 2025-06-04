function sanitizeText(input:string) {
  return input
    .replace(/['"`\\;]/g, '')       
    .replace(/<[^>]*>?/gm, '')       
    .replace(/[\0\b\t\n\r\x1a]/g, ''); 
}