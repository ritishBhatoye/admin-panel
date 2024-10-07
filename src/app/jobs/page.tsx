import { JobTable, Job } from '@/components/layout/JobTable';
import DashboardLayout from "../dashboard/layout";

const jobs: Job[] = [
  {
    id: "TASK-8782",
    title: "You can't compress the program without quantifying the open-source SSD pixel!",
    status: "in progress",
    priority: "medium",
    type: "documentation",
  },
  {
    id: "TASK-7878",
    title: "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    status: "backlog",
    priority: "medium",
    type: "documentation",
  },
  {
    id: "TASK-7839",
    title: "We need to bypass the neural TCP card!",
    status: "todo",
    priority: "high",
    type: "bug",
  },
  {
    id: "TASK-5562",
    title: "The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!",
    status: "backlog",
    priority: "medium",
    type: "feature",
  },
  {
    id: "TASK-8686",
    title: "I'll parse the wireless SSL protocol, that should driver the API panel!",
    status: "canceled",
    priority: "medium",
    type: "feature",
  },
  // Add more job data as needed
];

export default function JobsPage() {
  return (
    <DashboardLayout>
      <div className="bg-background text-foreground min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">Jobs</h1>
        <JobTable jobs={jobs} />
      </div>
    </DashboardLayout>
  );
}