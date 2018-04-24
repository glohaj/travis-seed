import play.sbt.PlayImport.PlayKeys.playRunHooks

// A note on the use of webpack (and npm)
// This build file is based on https://github.com/wigahluk/play-webpack/

name := "play-seed"

version := "1.0"

routesGenerator := InjectedRoutesGenerator

fork in Test := true
javaOptions in Test ++= Seq("-Dconfig.file=conf/test.conf")

fork in Production := true
javaOptions in Production ++= Seq("-Dconfig.file=conf/production.conf")

scalaVersion := "2.11.11"

libraryDependencies ++= Seq(
  javaWs,
  jdbc,
  cache,
  filters
)

resolvers += "scalaz-bintray" at "http://dl.bintray.com/scalaz/releases"
resolvers += Resolver.url("Typesafe Ivy releases", url("https://repo.typesafe.com/typesafe/ivy-releases"))(Resolver.ivyStylePatterns)

lazy val root = project.in(file(".")).enablePlugins(PlayScala)
// Compile the project before generating Eclipse files, so that generated .scala or .class files for views and routes are present
EclipseKeys.preTasks := Seq(compile in Compile)
EclipseKeys.withSource := true
EclipseKeys.withJavadoc := true
EclipseKeys.skipParents in ThisBuild := false