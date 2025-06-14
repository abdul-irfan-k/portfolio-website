-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "project_name" TEXT NOT NULL,
    "banner_url" TEXT,
    "video_url" TEXT,
    "description" TEXT,
    "tech_stack" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "order" INTEGER NOT NULL DEFAULT 0,
    "github_url" TEXT,
    "website_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_project_name_key" ON "Project"("project_name");
