import { DocsSidebar } from "@/components/docs-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function DocsPage() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <DocsSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <h1 className="h1">Introduction To Process Mining</h1>
        <p className="p">
          This section provides an overview of the core concepts and algorithms related to process mining that are supported by the web application.
        </p>
        <ol className="ol">
          <li className="li h2">
            Process Mining Concepts
          </li>
          <ul className="ul">
            <li className="li">
              <b>Process:</b> A process is defined as a repeatable series of actions, moving from a predefined start to a predefined finish. Companies often have internal processes that can be represented graphically as process models.
            </li>
            <li className="li">
              <b>Event Log:</b> Information systems commonly record user actions into event logs. An event log is a collection of recorded events capturing the execution of a process. Each event corresponds to a specific activity within the process and is associated with a case or process instance. Event logs are essential information for process mining.
              <ul className="ul2">
                <li className="li">
                  <b>Minimum required information</b> for each event includes a <b>case ID</b> (specifies the process instance) and <b>activity</b> (indicates the performed action).
                </li>
                <li className="li">
                  Other attributes like <b>resource type</b> or <b>timestamp</b> can also be present. <b>Timestamps</b> allow for performance analysis and bottleneck discovery. Events are typically arranged in chronological order.
                </li>
                <li className="li">
                  A <b>process instance</b> is a structured sequence of events representing a single run or occurrence of a process.
                </li>
              </ul>
            </li>
            <li className="li">
              <b>Process Models:</b> Graphical representations of processes, capturing activities, their sequence, and dependencies. Various notations exist, such as <b>Petri nets</b> and <b>BPMN</b>.
            </li>
          </ul>

          <li className="li h2">
            Basic Process Mining Techniques
          </li>
          <ul className="ul">
            <p className="p">
              Process mining is a field linking process and data science. It serves to <b>discover, monitor,</b> and <b>improve</b> real-life processes by extracting knowledge from event logs. The main categories are:
            </p>
            <li className="li">
              <b>Process Discovery:</b> The process of <b>constructing a process model</b> based on an <b>event log</b>. The goal is to accurately represent the behavior captured in the data. This is the most widely used technique, especially for organizations new to process mining. Discovery algorithms take an event log as input and produce a process model as output.
            </li>
            <li className="li">
              <b>Conformance Checking:</b> Analyzes the <b>relationship</b> between an intended <b>process model</b> and actual <b>event logs</b>. It helps identify deviations from the model. Conformance checking takes both a process model and an event log as input, returning diagnostic information. Use cases include detecting deviations, finding potential fraud or inefficiency.
            </li>
            <li className="li">
              <b>Process Enhancement (Model Enhancement):</b> Involves <b>improving and extending</b> existing process models using insights from analysis. This can involve adjusting models to align with logs or utilizing additional attributes like <b>timestamps</b> and <b>resource data</b> for analysis (e.g., waiting times, bottlenecks, resource usage). Enhancement techniques often involve adding information to the model, such as <b>bottlenecks</b> or <b>trace frequencies</b>.
            </li>
          </ul>
        
          <li className="li h2">
            Process Model Representation
          </li>
          <p className="p">
            The application supports <b>Petri nets</b> and <b>Directly-follows graphs</b>:
          </p>
          <ul className="ul">
            <li className="li">
              <b>Petri Nets:</b> A common formal notation for modeling processes, including concurrency, iterations, and decisions. They consist of <b>transitions</b> (activities, represented by squares) and <b>places</b> (represented by circles), connected by <b>arcs</b> (arrows) showing flow. Flow is regulated by <b>tokens</b>. <b>Workflow nets</b> are a specific type used in process mining with dedicated start and end places.
            </li>
            <li className="li">
              <b>Directly-Follows Graphs (DFGs):</b> A simplified representation where nodes are activities and directed edges show direct relationships between activities observed in the log. DFGs are more compact and readable than Petri nets but are not executable.
            </li>
          </ul>
          
          <li className="li h2">
            Imperative Process Mining
          </li>
          <p className="p">
            Imperative techniques generate process models that explicitly define all possible behaviors observed in the event log.
          </p>
          <ul className="ul">
            <li className="li">
              <b>Alpha Algorithm:</b> An older, intuitive algorithm for process discovery that can handle concurrency. It discovers relationships between activities based on their direct succession in the log. It has drawbacks, including not considering frequency, struggling with short loops, and not guaranteeing the simplest model.
            </li>
            <li className="li">
              <b>Heuristic Miner:</b> Improves upon the Alpha algorithm, effectively handling noise, accounting for the frequency of traces and activities, and dealing with loops of length 1 and 2.
            </li>
            <ul className="ul2">
              <li className="li">
                It starts by creating a <b>dependency graph</b>, quantifying the strength of relationships between events using a value between -1 and 1.
              </li>
              <li className="li">
                It uses specific <b>thresholds</b> for different dependency types to determine which relationships result in arcs in the final model.
              </li>
              <li className="li">
                Options like <b>"all tasks connected"</b> prevent activities from being disconnected if they don't meet thresholds, by finding the best candidate connection. The <b>"relative to best threshold"</b> controls which arcs are included when connecting disjointed activities. <b>"Long distance relationships"</b> capture relationships between activities that don't directly follow each other.
              </li>
            </ul>
            <li className="li">
              <b>Optimal Alignments (Conformance Checking):</b> A technique that, given a trace and an imperative process model (Petri net), finds the best possible alignment by minimizing deviations. It represents the alignment as a sequence of pairs of activities from the trace and model. A <b>"no move operation" (⊥)</b> is used to handle discrepancies where an activity is missing in either the trace or the model. The algorithm uses a <b>distance function</b> to assign costs and determine the optimal alignment. It is useful for discovering discrepancies.
            </li>
          </ul>
        
          <li className="li h2">
            Declarative Process Mining
          </li>
          <p className="p">
            Declarative techniques generate constraint-based models that declare the behavior that must be followed in the event log. Any behavior that does not violate these constraints is allowed. This approach is particularly useful for large and flexible event logs, resulting in simpler, more concise models.
          </p>
          <ul className="ul">
            <li className="li">
              <b>DECLARE Language:</b> The modeling language used in declarative process mining. Models consist of constraints which are instances of <b>Templates</b>.
            </li>
            <li className="li">
              <b>Templates:</b> Abstract constraints defined using <b>LTL notation</b>, describing behaviors the log must follow. They have an <b>LTL specification</b> and a graphical representation.
              <ul className="ul2">
                <li className="li">
                  <b>Types of templates</b> supported by the application: <b>Existence</b> (frequency/position of an event), <b>Relation</b> (dependencies between two events), and <b>Negative Relation</b> (absence of specific relations). <b>Choice templates</b> are mentioned but not supported by the application.
                </li>
              </ul>
            </li>
            <li className="li">
              <b>Discovery:</b> The algorithm identifies template constraints present in the event log. It involves generating candidates, evaluating which hold true against the log, and transforming them into the final DECLARE model.
              <ul className="ul2">
                <li>
                  Parameters can be configured for each template to manage computational intensity and focus on relevant events. These include <b>Percentage of Events (PoE)</b> (proportion of most frequent events considered), <b>Percentage of Instances (PoI)</b> (proportion of traces that must satisfy a constraint), and <b>Vacuity detection</b> (whether to include vacuously satisfied constraints).
                </li>
              </ul>
            </li>
            <li className="li">
              <b>Conformance Checking:</b> Evaluates how well a trace aligns with a DECLARE model.
              <ul className="ul2">
                <li className="li">
                  <b>Constraint Activation:</b> When an activation event in a trace occurs, the trace becomes obliged to satisfy the corresponding template constraint.
                </li>
                <li className="li">
                  Each activation results in either <b>Fulfillment</b> (constraint accepted), <b>Violation</b> (constraint not accepted), or <b>Conflict</b> (ambiguity with multiple activations).
                </li>
                <li className="li">
                  <b>Trace Healthiness:</b> Quantitative results of the conformance check. Attributes include <b>Activation sparsity</b> (how much constraint was activated), <b>Fulfillment ratio</b> (portion of activations fulfilled), <b>Violation ratio</b> (portion of activations violated), and <b>Conflict ratio</b> (portion of activations conflicted).
                </li>
              </ul>
            </li>
          </ul>
        </ol>
      </SidebarInset>
    </SidebarProvider>
  )
}
