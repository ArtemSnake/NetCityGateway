using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GateDataLoader
{
	class GateDataFacade
	{
		private static GateDataFacade _instance;
		public static GateDataFacade Instance()
		{
			return _instance ?? (_instance = new GateDataFacade());
		}


	}
}
