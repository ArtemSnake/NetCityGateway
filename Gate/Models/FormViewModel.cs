using System.Collections.Generic;

namespace Gate.Models
{
	public class FormViewModel
	{
		public List<Method> Methods { get; set; }
		public List<Version> Versions { get; set; }
		public List<ResponseFormat> ResponseFormats { get; set; }
	}
}