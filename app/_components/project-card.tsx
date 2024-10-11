import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { IconExternalLink, IconBrandGithub } from '@tabler/icons-react';
import { Project } from '@/types';
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col justify-between bg-background">
      <CardHeader className="p-0">
        <Image
          src='/adorabel.png'
          width={80}
          height={48}
          className="w-full h-48 object-cover rounded-t-lg" alt={""} />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0 space-x-1">
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open(project.liveUrl, '_blank')}
        >
          <IconExternalLink className="mr-2 h-4 w-4" />
          Live Demo
        </Button>
        {project.githubUrl && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <IconBrandGithub className="mr-2 h-4 w-4" />
            Source Code
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}