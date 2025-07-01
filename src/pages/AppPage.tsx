import {FC} from 'react';
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import landingPage from "@/assets/landing_page.png"
import logsPage from "@/assets/logs_page.png"
import logsOperations from "@/assets/logs_operations.png"
import heuristicMining from "@/assets/heuristic_mining.png"
import declarativeDiscovery from "@/assets/declarative_discovery.png"
import optimalAlignmentAndGraph from "@/assets/optimal_alignment_and_graph.png"

const AppPage: FC = () => {
	return (
		<SidebarProvider
			style={
				{
				"--sidebar-width": "19rem",
				} as React.CSSProperties
			}
		>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 px-4">
					<SidebarTrigger className="-ml-1" />
					<Separator
						orientation="vertical"
						className="mr-2 data-[orientation=vertical]:h-4"
					/>
				</header>

				<div className="article article--large">
					<h1 className="h1" id="heading">Use ProcessM.NET in the web app</h1>
					<p className="p">
						You can use the ProcessM.NET library through the <b>web application</b>, which features a clean, minimal interface and intuitive functionality designed for ease of use.
					</p>
					<p className="p">
						The app enables you to upload event logs, visualize process models, and easily perform conformance checking. Its interface provides you importing logs, choosing algorithms, and reviewing results.
					</p>
					<p className="p">
						Everything you need is dockerized, so you can mine your processes without ever needing any special dependencies on your machine.
					</p>
					
					<h2 className="h2" id="all-it-takes-is-to">All it takes is to:</h2>
					<ul className="ul">
						<li className="li" id="clone-repository">
							<a href="https://github.com/KovacFilip/ProcessM.NET" className="hyperlink">clone this repository</a>,
						</li>
						<li className="li" id="docker-compose">
							run the docker container via <code className="code">docker compose up</code> in your terminal,
						</li>
						<li className="li" id="open-app">
							open the app in your web browser at <code className="code">http://localhost:8081</code>, and you can start mining your processes right away!
						</li>
					</ul>
					
					<h2 className="h2" id="introduction">Introduction</h2>
					
					<h3 className="h3" id="landing-page">Landing page</h3>
					<p className="p">
						This is an introductory page that welcomes you to the app once you open it. 
					</p>
					<img src={landingPage} alt="Landing page screenshot" className="screenshot" />
					
					<h3 className="h3" id="logs-page">Logs page</h3>
					<p className="p">
						This is a core page where you browse all your event logs. You can upload new logs, mine existing ones or delete them.
					</p>
					<img src={logsPage} alt="Logs page screenshot" className="screenshot" />
				
					<h3 className="h3" id="logs-operations">Logs operations</h3>
					<p className="p">
						With every event log you can perform various operations. You can mine the log with the imperative methods such as <b>Alpha mining</b> or <b>Heuristic mining</b>, or you can choose the <b>Declarative discovery</b> algorithm. Additionally, you can visualize the process model via the generated graph.
					</p>
					<img src={logsOperations} alt="Logs operations screenshot" className="screenshot" />
					
					<h4 className="h4" id="imperative-mining">Imperative mining</h4>
					<p className="p">
						Because the Alpha algorithm and Heuristic algorithm share the similar structure, we provide the example of the more advanced <b>Heuristic mining</b>.
					</p>
					<p className="p">
						Firstly, you configure the miner by selecting the Case ID and Activity columns from the event log. Next, you can adjust configuration thresholds such as noise or loop length.
					</p>
					<p className="p">
						You can also interact with the mined model through several features:
					</p>
					<ul className="ul">
						<li className="li">
							<b>Show/Hide Activities</b>
						</li>
						<li className="li">
							<b>Export Model</b> to DOT format
						</li>
						<li className="li">
							<b>Save Model</b> to the local IndexedDB for future access
						</li>
					</ul>
					<img src={heuristicMining} alt="Heuristic mining screenshot" className="screenshot" />
					
					<h4 className="h4" id="declarative-discovery">Declarative discovery</h4>
					<p className="p">
						Selecting this process mining method takes you through a step-by-step form that simplifies the entire workflow.
					</p>
					<p className="p">
						<ol className="ol">
							<li className="li">
								On the first page, you select the templates you want to discover. Each template is accompanied by a brief explanation to help you make an informed decision.
							</li>
							<li className="li">
								After choosing the templates, you proceed to a configuration page where you can adjust parameters for each template, such as <b>Percentage of Events (PoE)</b>, <b>Percentage of Instances (PoI)</b>, or <b>Vacuity detection</b>. The interface offers clear guidance to make the configuration process straightforward.
							</li>
							<li className="li">
								After configuring the templates, you can start the mining process. The resulting process model will be shown on the final page of the form, as demonstrated in the image below:
							</li>
						</ol>
					</p>
					<img src={declarativeDiscovery} alt="Declarative discovery screenshot" className="screenshot" />

					<h3 className="h3" id="optimal-alignment-check">Optimal Alignment Check</h3>
					<p className="p">
						When the user chooses to perform optimal alignment on an imperative process model, they are directed to a page where they can import a trace. The trace can be selected either from a newly uploaded CSV file or from an already imported event log.
					</p>
					<p className="p">
						The trace import process is managed through a dialog window, allowing the user to choose any trace from the selected (or newly imported) event log. Once traces are imported, they are displayed in a table on the page.
					</p>
					<p className="p">
						The user then selects a trace to use for conformance checking. Upon selection, a dialog window appears (as shown by the image below). On the left side of this window, the optimal alignment is displayed. In this view, activities with a cost greater than 0 are highlighted, indicating that either the activity is missing from the model or it exists in the model but is absent from the trace.
					</p>
					<img src={optimalAlignmentAndGraph} alt="Optimal Alignment and graph screenshot" className="screenshot" />
					
					<h3 className="h3" id="declare-conformance-check">DECLARE Conformance Check</h3>
					<p className="p">
						The DECLARE conformance checking process closely follows the workflow of optimal alignments conformance checking from a user interface perspective. The user starts by importing traces from an event log, which are then displayed in a table on the page.
					</p>
					<p className="p">
						To initiate the conformance check, the user selects a trace by clicking the “select” icon. After selecting the trace, the page displays the results in a dialog window. This window includes the process model, the selected trace, and the corresponding healthiness values, which indicate how well the trace fits the model.
					</p>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
};

export default AppPage;