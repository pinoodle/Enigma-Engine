// Function to convert HTML to Markdown
function converterMD(html) {
    // Remove any leading/trailing whitespace
    html = html.trim();

    // Replace headings
    html = html.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1');
    html = html.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1');
    html = html.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1');

    // Replace combined bold and italic
    html = html.replace(/<strong><em>(.*?)<\/em><\/strong>/gi, '***$1***');

    // Replace bold
    html = html.replace(/<strong>(.*?)<\/strong>/gi, '**$1**');

    // Replace italic
    html = html.replace(/<em>(.*?)<\/em>/gi, '*$1*');

    // Replace underline
    html = html.replace(/<u>(.*?)<\/u>/gi, '_$1_');

    // Replace <br> tags with newline characters, preserving multiple consecutive <br>
    html = html.replace(/(<br\s*\/?>)+/gi, function(match) {
        return '\n'.repeat(match.split(/<br\s*\/?>/i).length);
    });

    return html.trim();
}

// Function to convert Markdown to HTML
function converterHTML(markdown) {
    // Remove any leading/trailing whitespace
    markdown = markdown.trim();

    // Replace headings
    markdown = markdown.replace(/^# (.*$)/gim, '<h1 style="text-align: center;">$1</h1>');
    markdown = markdown.replace(/^## (.*$)/gim, '<h2 style="text-align: center;">$1</h2>');
    markdown = markdown.replace(/^### (.*$)/gim, '<h3 style="text-align: center;">$1</h3>');

    // Replace combined bold and italic (do this before individual bold and italic)
    markdown = markdown.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');

    // Replace bold
    markdown = markdown.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Replace italic
    markdown = markdown.replace(/\*(.*?)\*/g, '<em>$1</em>');

    // Replace underline
    markdown = markdown.replace(/_(.*?)_/g, '<u>$1</u>');

    // Replace newlines with <br>, preserving multiple consecutive newlines
    markdown = markdown.replace(/\n+/g, function(match) {
        return '<br>'.repeat(match.length);
    });

    return markdown.trim();
}