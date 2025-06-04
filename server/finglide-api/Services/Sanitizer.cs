namespace finglide_api.Services
{
    public static class Sanitizer{
        public static string SanitizeText(string input)
        {
            if (string.IsNullOrEmpty(input)) return string.Empty;

            var unsafeChars = new[] { "'", "\"", ";", "--", "<", ">", "\\", "/" };
            foreach (var ch in unsafeChars)
            {
                input = input.Replace(ch, string.Empty);
            }

            return input;
        }
    }  
} 