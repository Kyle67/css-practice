import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Divider, Flex, Heading, Link } from "@chakra-ui/react";
import { PageProps, pages } from "@/const";

export default function Home() {
  const pageArray: PageProps[][] = [];
  const pageArray2: PageProps[][] = [];
  const columnCount = 3;

  for (let i = 0; i < columnCount; i++) {
    pageArray.push([]);
    pageArray2.push([]);
  }

  for (const page in pages[0]) {
    const pageNumber = Number(page);
    pageArray[pageNumber % 3].push(pages[0][page]);
  }

  for (const page in pages[1]) {
    const pageNumber = Number(page);
    pageArray2[pageNumber % 3].push(pages[1][page]);
  }

  return (
    <Flex flexDir="column">
      <Heading pb="30px">CSS Practice Pages</Heading>
      <Flex flexDir="column" pb="30px">
        <Heading size="lg" pb="20px">
          Copied Pages
        </Heading>
        <Flex flexDir="row" justifyContent={"space-around"}>
          {pageArray.map((columnArray, index, array) => (
            <Flex key={columnArray.toString()}>
              <Flex flexDir="column">
                {columnArray.map((page) => (
                  <Link
                    key={page.label}
                    href={page.href}
                    color="#297eff"
                    _visited={{ color: "#a629ff" }}
                    fontSize="20px"
                  >
                    {page.label}
                  </Link>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex flexDir="column" pb="30px">
        <Heading size="lg" pb="20px">
          Playground
        </Heading>
        <Flex flexDir="row" justifyContent="space-around">
          {pageArray2.map((columnArray, index, array) => (
            <Flex key={columnArray.toString()}>
              <Flex flexDir="column">
                {columnArray.map((page) => (
                  <Link
                    key={page.label}
                    href={page.href}
                    color="#297eff"
                    _visited={{ color: "#a629ff" }}
                    fontSize="20px"
                  >
                    {page.label}
                  </Link>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
