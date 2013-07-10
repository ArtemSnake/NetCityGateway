using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Gate.Models
{
	public class ServerResponse
	{
		public ResponseRype ResponseRype { get; set; }
		public object Data { get; set; }
	}
}